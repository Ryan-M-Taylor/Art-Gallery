"use client";
import React, { useState } from "react";
import { Comment } from "../../utils/utils";
import styles from "./Comment.module.css";
import NewCommentForm from "./NewCommentForm";

export default function Comment() {
  const [newComments, setNewComments] = useState([]);
  const addComment = (newCommentBody: string) => {
    const newComment = {
      id: newComments.length + 1,
      body: newCommentBody,
      timestamp: Date.now(),
    };
    setNewComments((prev) => [...prev, newComment]);
  };

  return (
    <div className={styles.comments_section}>
      <div>
        {newComments.map((comment) => (
          <div className={styles.comments} key={comment.id}>
            <p>{comment.body}</p>
            <p className={styles.comments_date}>
              {new Date(comment.timestamp).toLocaleDateString("en-US", {
                timeZone: "UTC",
              })}
            </p>
          </div>
        ))}
      </div>
      <NewCommentForm addComment={addComment}/>
    </div>
  );
}
