import React, { useState, useEffect } from "react";
import JoditEditor from "jodit-react";

const LegalNotes = () => {
  
  const [legalNotesContent, setLegalNotesContent] = useState("");
  const editorConfig = {
    readonly: false,
    toolbarSticky: true,
    height: 400, 
  };

  useEffect(() => {
    const fetchTerms = () => {
      const initialTerms =
        "<h2>Legal Notes</h2><p>Your legal notes content goes here...</p>";
      setLegalNotesContent(initialTerms);
    };

    fetchTerms();
  }, []);

  // Handle changes to the editor content
  const handleEditorChange = (newContent) => {
    setLegalNotesContent(newContent);
  };

  // Simulate saving the updated terms (you can replace this with an API call)
  const handleSave = () => {
    // For demonstration, just log the updated content
    console.log("Updated Terms and Conditions:", legalNotesContent);
    alert("Terms and Conditions saved!");
  };

  return (
    <div className="terms-and-conditions">
      <h1 className="text-black text-2xl font-work font-semibold">
        Legal Notes
      </h1>
      <p className="text-gray100 text-sm font-work font-medium mb-6">
        Edit the content below to update your legal notes.
      </p>

      {/* Jodit Editor */}
      <JoditEditor
        value={legalNotesContent}
        config={editorConfig}
        onChange={handleEditorChange}
      />
      <div style={{ marginTop: "20px" }}>
        <button
          type="button"
          className="rounded-xl w-full mt-4 py-2 cursor-pointer font-semibold font-work text-white bg-primary border border-primary"
          onClick={handleSave}
        >
          Update
        </button>
      </div>

      {/* Display updated terms (optional) */}
      <div style={{ marginTop: "30px" }}>
        <h3 className="text-black text-2xl font-work font-semibold mb-6">
          Preview Updated Content:
        </h3>
        <div dangerouslySetInnerHTML={{ __html: legalNotesContent }} />
      </div>
    </div>
  );
};

export default LegalNotes;
