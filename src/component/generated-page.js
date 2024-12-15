import React, { useState, useEffect } from 'react';
import '../App.css';

const GeneratePaged = () => {
  const [twoMarks, setTwoMarks] = useState([]);
  const [tenMarks, setTenMarks] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/questions');
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
    <>
      <div className="container-question">
        <div className="left-container">
          <h2>Two Marks Questions</h2>
          {twoMarks.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th colSpan="2">S.No</th>
                  <th colSpan="2">Question</th>
                  <th colSpan="2">Bloom's Level</th>
                </tr>
              </thead>
              <tbody>
                {twoMarks.map((question, index) => (
                  <tr key={index}>
                    {question.map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading Two Marks Questions...</p>
          )}
        </div>
      </div>

      <div className="container-question">
        <div className="right-container">
          <h2>Ten Marks Questions</h2>
          {tenMarks.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th colSpan="2">Question</th>
                  <th colSpan="2">Bloom's Level</th>
                </tr>
              </thead>
              <tbody>
                {tenMarks.map((question, index) => (
                  <tr key={index}>
                    {question.map((value, i) => (
                      <td key={i}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading Ten Marks Questions...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default GeneratePaged;
