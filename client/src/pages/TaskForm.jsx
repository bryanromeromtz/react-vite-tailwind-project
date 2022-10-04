import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTasks } from "../context/TasksContext.jsx";
import { useParams } from "react-router-dom";

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      } else {
        console.log("no hay id");
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1>{params.id ? "Edit Task" : "Create Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
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
          if (params.id) {
            console.log("editando");
            await updateTask(params.id, values);
          } else {
            console.log("creando");
            await createTask(values);
          }
          actions.resetForm();
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
            {params.id ? (
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Edit Task"}
              </button>
            ) : (
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Create Task"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
