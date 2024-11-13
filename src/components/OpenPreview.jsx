import PropTypes from 'prop-types';

export default function OpenPreview({ file }) {
    // Determine if the file is a PDF by checking its extension
    const isPdf = file.toLowerCase().endsWith('.pdf');
    
    return (
        <div>
            {isPdf ? (
                // Render PDF in an iframe
                <iframe 
                    src={file} 
                    width="100%" 
                    height="600px" 
                    title="PDF Preview" 
                    style={{ border: 'none' }}
                />
            ) : (
                // Render image
                <img 
                    src={file} 
                    alt="Preview" 
                    style={{ width: '100%', height: 'auto', maxHeight: '600px' }} 
                />
            )}
        </div>
    );
}

// PropTypes validation
OpenPreview.propTypes = {
    file: PropTypes.string.isRequired,
};
