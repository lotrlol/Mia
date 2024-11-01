import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, LogOut, Upload, X, ChevronDown, ExternalLink } from 'lucide-react';
import netlifyIdentity, { User } from 'netlify-identity-widget';
import Papa from 'papaparse';
import { Notification } from '../components/Notification';
import { generatePage, getGeneratedPages, removeGeneratedPage } from '../utils/pageGenerator';
import { PreviewModal } from '../components/PreviewModal';
import { GeneratedPagesList } from '../components/GeneratedPagesList';

interface CSVData {
  'Page Title': string;
  'Page Body': string;
  'META Title': string;
  'Meta Description': string;
  'Slug': string;
}

interface NotificationState {
  isVisible: boolean;
  message: string;
  link?: string;
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isDropzoneOpen, setIsDropzoneOpen] = useState(false);
  const [csvData, setCSVData] = useState<CSVData[]>([]);
  const [error, setError] = useState<string>('');
  const [generatingPages, setGeneratingPages] = useState<Record<number, boolean>>({});
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    message: '',
    link: undefined
  });
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    content: string;
    title: string;
  }>({
    isOpen: false,
    content: '',
    title: ''
  });

  useEffect(() => {
    netlifyIdentity.init();
    const currentUser = netlifyIdentity.currentUser();
    
    if (!currentUser) {
      navigate('/admin');
      return;
    }
    
    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    netlifyIdentity.logout();
    navigate('/admin');
  };

  const handleFileUpload = (file: File) => {
    if (file.type !== 'text/csv') {
      setError('Please upload a CSV file');
      return;
    }

    Papa.parse<CSVData>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          setError('Error parsing CSV file: ' + results.errors[0].message);
          return;
        }
        
        const requiredColumns = ['Page Title', 'Page Body', 'META Title', 'Meta Description', 'Slug'];
        const missingColumns = requiredColumns.filter(col => !results.meta.fields?.includes(col));
        
        if (missingColumns.length > 0) {
          setError(`Missing required columns: ${missingColumns.join(', ')}`);
          return;
        }

        setCSVData(results.data);
        setError('');
        setIsDropzoneOpen(false);
      },
      error: (error) => {
        setError('Error parsing CSV file: ' + error.message);
      }
    });
  };

  const handleGeneratePage = async (rowIndex: number, rowData: CSVData) => {
    if (!user) {
      setError('You must be logged in to generate pages');
      return;
    }

    setGeneratingPages(prev => ({ ...prev, [rowIndex]: true }));
    try {
      await generatePage({
        title: rowData['Page Title'],
        body: rowData['Page Body'],
        metaTitle: rowData['META Title'],
        metaDescription: rowData['Meta Description'],
        slug: rowData['Slug']
      }, user);
      
      setNotification({
        isVisible: true,
        message: 'Page created successfully! The site will rebuild automatically.',
        link: `/pages/${rowData['Slug']}.html`
      });
    } catch (err) {
      setError('Failed to generate page: ' + (err as Error).message);
    } finally {
      setGeneratingPages(prev => ({ ...prev, [rowIndex]: false }));
    }
  };

  const handleDeletePage = (slug: string) => {
    try {
      removeGeneratedPage(slug);
      setNotification({
        isVisible: true,
        message: 'Page deleted successfully!',
      });
    } catch (err) {
      setError('Failed to delete page: ' + (err as Error).message);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handlePreview = (content: string, title: string) => {
    setPreviewModal({
      isOpen: true,
      content,
      title
    });
  };

  if (!user) {
    return null;
  }

  const generatedPages = getGeneratedPages();

  return (
    <div className="min-h-screen bg-dark-purple/30">
      <nav className="bg-dark-purple/50 backdrop-blur-sm border-b border-white/5 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-pink-500" />
            </div>
            <span className="text-xl font-bold text-white">Admin Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white/70">{user.email}</span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid gap-8">
          {/* CSV Upload Section */}
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Upload CSV</h2>
            <div
              className={`border-2 border-dashed ${isDropzoneOpen ? 'border-pink-500' : 'border-white/10'} rounded-xl p-8 text-center cursor-pointer transition-colors`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnter={() => setIsDropzoneOpen(true)}
              onDragLeave={() => setIsDropzoneOpen(false)}
              onClick={() => document.getElementById('csvUpload')?.click()}
            >
              <Upload className="h-8 w-8 text-white/70 mx-auto mb-4" />
              <p className="text-white/70">
                Drag and drop a CSV file here, or click to select a file
              </p>
              <input
                type="file"
                id="csvUpload"
                accept=".csv"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              />
            </div>
          </div>

          {/* CSV Data Preview */}
          {csvData.length > 0 && (
            <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">CSV Data Preview</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-white/70">Title</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-white/70">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {csvData.map((row, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-3 px-4">
                          <span className="text-white">{row['Page Title']}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handlePreview(row['Page Body'], row['Page Title'])}
                              className="text-pink-500 hover:text-pink-400 transition-colors flex items-center"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="ml-1">Preview</span>
                            </button>
                            <button
                              onClick={() => handleGeneratePage(index, row)}
                              disabled={generatingPages[index]}
                              className="text-green-500 hover:text-green-400 transition-colors flex items-center disabled:opacity-50"
                            >
                              {generatingPages[index] ? (
                                <div className="h-4 w-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Upload className="h-4 w-4" />
                              )}
                              <span className="ml-1">Generate</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Generated Pages List */}
          <GeneratedPagesList pages={generatedPages} onDelete={handleDeletePage} />
        </div>
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={previewModal.isOpen}
        onClose={() => setPreviewModal({ ...previewModal, isOpen: false })}
        content={previewModal.content}
        title={previewModal.title}
      />

      {/* Notification */}
      <Notification
        isVisible={notification.isVisible}
        message={notification.message}
        link={notification.link}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />
    </div>
  );
}