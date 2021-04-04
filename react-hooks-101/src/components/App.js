import React, { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index';

const App = props => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    // dispatch(action)
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body
    });
    setTitle('');
    setBody('');
  };

  return (
    <div className="container-fluid">
      <h4>イベント入力フォーム</h4>
      <form>
        {/* タイトル */}
        <div className="form-group">
          <label htmlFor="formEventTitle" className="form-label">
            タイトル
          </label>
          <input
            id="formEventTitle"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        {/* ボディ */}
        <div className="form-group">
          <label htmlFor="formEventBody" className="form-label">
            ボディー
          </label>
          <input
            id="formEventBody"
            className="form-control"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={addEvent}>
          イベントを作成する
        </button>
        <button type="submit" className="btn btn-danger">
          すべてのイベントを削除する
        </button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>title1</td>
            <td>body1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
