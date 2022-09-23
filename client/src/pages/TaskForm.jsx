import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  getTasksRequest,
  getTaskByIdRequest,
  createTaskRequest,
  updateTaskRequest,
  deleteTaskRequest,
} from "../api/tasks.api.js";

function TasksForm() {
  return (
    <div>
      <h1>Tasks Form</h1>
      <Formik
        initialValues={{ title: "", description: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title || values.title.length < 3) {
            errors.title = "Please enter a title";
          } else if (!values.description) {
            errors.description = "Please enter a description";
          }
          return errors;
        }}
        onSubmit={async (values, actions) => {
          try {
            const res = await createTaskRequest(values);
            actions.resetForm();
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, values, isSubmitting }) => (
          <Form>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title for your task"
              onChange={handleChange}
              value={values.title}
            />
            <ErrorMessage name="title" component="div" />
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Enter a description for the task"
              onChange={handleChange}
              value={values.description}
            />
            <ErrorMessage name="description" component="div" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
