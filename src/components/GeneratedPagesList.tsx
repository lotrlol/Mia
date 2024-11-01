import React from 'react';
import { ExternalLink, Trash2 } from 'lucide-react';

interface GeneratedPage {
  title: string;
  slug: string;
  createdAt: string;
}

interface GeneratedPagesListProps {
  pages: GeneratedPage[];
  onDelete?: (slug: string) => void;
}

export function GeneratedPagesList({ pages, onDelete }: GeneratedPagesListProps) {
  return (
    <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Generated Pages</h2>
      
      {pages.length === 0 ? (
        <p className="text-white/70 text-center py-8">No pages have been generated yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-semibold text-white/70">Title</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-white/70">Created</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-white/70">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.slug} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4">
                    <span className="text-white">{page.title}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-white/70">
                      {new Date(page.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <a
                        href={`/pages/${page.slug}.html`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400 transition-colors flex items-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="ml-1">View</span>
                      </a>
                      {onDelete && (
                        <button
                          onClick={() => onDelete(page.slug)}
                          className="text-red-400 hover:text-red-300 transition-colors flex items-center"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="ml-1">Delete</span>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}