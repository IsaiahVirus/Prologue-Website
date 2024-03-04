import React, { useState } from 'react';


//this is the edit column which has a quick list of submissions
function EditColumn({ submissions, onSelect }) {
  const [sortBy, setSortBy] = useState(null);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState(null);

  //these sort the submissions by author, editor, and status 
  const handleSortBy = (field) => {
    if (sortBy === field) {
      setSortBy(`-${field}`);
    } else {
      setSortBy(field);
    }
  };

  const sortedSubmissions = sortBy ? [...submissions].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  }) : submissions;


  //this part selects a submission to open further details on from the quick list via submission id
  const handleSelectSubmission = (submissionId) => {
  const selectedSubmission = submissions.find(submission => submission.id === submissionId);
    
    if (selectedSubmissionId === submissionId) {
      setSelectedSubmissionId(null);
      onSelect(null); 
    } else {
      setSelectedSubmissionId(submissionId);
      onSelect(selectedSubmission);
    }
  };

//this changes the color of the submission in the list by genre
  const getButtonColor = (genre) => {
    switch (genre) {
      case 'Fiction':
        return '#FFADAD';
      case 'Creative Non-Fiction':
        return '$FFD6A5';
      case 'Poetry':
        return '#FDFFB6';
      case 'Art' :
        return '#E4F1EE';
      case 'Script or Screenplay' :
        return '#D9EFD8';
      default:
        return '#DEDAF4'; // wonderful color palette from https://kdesign.co/blog/pastel-color-palette-examples/ number 16
    }
  };

  //displays the buttons to sort and the list of submissions with relevent info
  return (
    <div className="box">
      <h2>Submissions</h2>
      <button onClick={() => handleSortBy('author')}>Sort by Author</button>
      <button onClick={() => handleSortBy('editor')}>Sort by Editor</button>
      <button onClick={() => handleSortBy('reviewStatus')}>Sort by Review Status</button>
      <ul className="edit-column">
        {sortedSubmissions.map((submission) => (
          <li
            key={submission.id}
            onClick={() => handleSelectSubmission(submission.id)}
            className={`edit-column-item ${submission.id === selectedSubmissionId ? 'selected' : ''}`}
            style={{ backgroundColor: getButtonColor(submission.genre) }}
        >
            Author: {submission.author}, Title: {submission.title}, Editor: {submission.editor}, Review Status: {submission.reviewStatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditColumn;
