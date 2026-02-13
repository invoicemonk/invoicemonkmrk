'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('Application error:', error)
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-red-600 mb-2">
            Application Error
          </h1>
          <p className="text-gray-600">
            Something went wrong while rendering this page.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error Message
              </h3>
              <div className="mt-2 text-sm text-red-700">
                {error.message || 'An unexpected error occurred'}
              </div>
            </div>
          </div>
        </div>

        {error.digest && (
          <div className="mb-6">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Error ID:</span> {error.digest}
            </p>
          </div>
        )}

        <details className="mb-6">
          <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
            Technical Details (Stack Trace)
          </summary>
          <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-auto max-h-96 text-gray-800">
            {error.stack || 'No stack trace available'}
          </pre>
        </details>

        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Go Home
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            What to do:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Check the error message above</li>
            <li>• Look at the stack trace for the problematic component</li>
            <li>• Check Vercel function logs for more details</li>
            <li>• Ensure all components using hooks have 'use client' directive</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
