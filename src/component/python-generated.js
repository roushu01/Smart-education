import React, { useState, useEffect } from 'react';
import '../App.css';

const GeneratePython = () => {
  const [twoMarks, setTwoMarks] = useState([]);
  const [tenMarks, setTenMarks] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5001/api/questions');
        const data = await response.json();

        if (data.two_marks && data.ten_marks) {
          setTwoMarks(data.two_marks.questions);
          setTenMarks(data.ten_marks.questions);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Two Marks Questions</h2>
      {twoMarks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Question</th>
              <th>Bloom's Level</th>
            </tr>
          </thead>
          <tbody>
            {twoMarks.map((question, index) => (
              <tr key={index}>
                <td>{question[0]}</td>
                <td>{question[1]}</td>
                <td>{question[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading Two Marks Questions...</p>
      )}

      <h2>Ten Marks Questions</h2>
      {tenMarks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Question</th>
              <th>Bloom's Level</th>
            </tr>
          </thead>
          <tbody>
            {tenMarks.map((question, index) => (
              <tr key={index}>
                <td>{question[0]}</td>
                <td>{question[1]}</td>
                <td>{question[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading Ten Marks Questions...</p>
      )}
    </div>
  );
};

export default GeneratePython;
