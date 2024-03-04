import { useState } from 'react';
import Footer  from './components/footer.js';
import './App.css';
import Rules  from './components/rules.js';
import About from './components/about.js';
import PrevEd from './components/prevEd.js';
import SubmitForm from './components/SubmitForm.js';
import Header from './components/Header.js';
import EditorLogin from './components/EditorLogin.js'
import EditColumn from './components/EditColumn.js';
import Dashboard from './components/Dashboard.js';

const App = () => {
  
  const [showSubmit, setShowSubmit] = useState (true);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const toggleSubmit = () => {
    setShowSubmit(!showSubmit);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLogin(false); 
  }; 
  const handleLogout = () => {
    setLoggedIn(false);
  };
  
const submissions = [ {
    id: 1,  
    author : 'Claude',
    title : 'BlahBlah',
    genre : 'Poetry',
    pathToFile : null,
    editor : 'Isabelle',
    reviewStatus : 'new',
  details : 'blah'},
  {id: 2,
    author : 'Aren',
    title : 'Room 41',
    genre : 'Fiction',
    pathToFile : null,
    editor : 'Joey',
    reviewStatus : 'new',
    details: 'stuff'}]

const handleSubmissionSelect = (submission) => {
  setSelectedSubmission(submission);
};

  return (
    <>
    <Header onLoginClick={toggleLogin}
    onLogoutClick={handleLogout}
    loggedIn={loggedIn} />

    {!loggedIn && showLogin && <EditorLogin onClose={closeLogin} onLogin={handleLogin} />}
    
   {!loggedIn && <Rules toggleSubmit={toggleSubmit} showSubmit={showSubmit}/>}
      {!loggedIn && !showSubmit && <SubmitForm />}
      

    
    {!loggedIn && <About />}
    
    {!loggedIn && <PrevEd />}

    

    {loggedIn && <EditColumn submissions ={submissions} onSelect={handleSubmissionSelect}/>}
    
    {loggedIn && selectedSubmission && <Dashboard submission = {selectedSubmission} />}
    
    <Footer />
    </>
  );
}

export default App;