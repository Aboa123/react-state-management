import React, { useState } from "react";

import {
  useForm
} from 'react-hook-form';

interface IFormData {
  email: string;
  nickName: string;
  password: string;
  verifyPassword: string;
  serverError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
      nickName: "Aboa"
    }
  });

  const onValid = (data: IFormData) => {
    console.log("전부통과!");
  }

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
            minLength: 10,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed"
            },
            validate: {
              noAboa: (value) => value.includes("aboa") ? "not allowed aboa" : true,
              noNick: (value) => value.includes("nick") ? "not allowed nick" : true,
            }
          })}
          placeholder={"Email"}
        />
        <span>
          {errors?.email?.message}
        </span>
        <input
          {...register("nickName", {
            required: "You need nickname",
            minLength: {
              message: "Your nickname is too short",
              value: 5,
            },
          })}
          placeholder={"Nickname"}
        />
        <span>
          {errors?.nickName?.message}
        </span>
        <input
          {...register("password", {
            required: true,
            minLength: 5
          })}
          placeholder={"Password"}
        />
        <span>
          {errors?.password?.message}
        </span>
        <input
          {...register("verifyPassword", {
            required: true,
            minLength: 5,
            validate: {
              notMatchPw: (value) => watch("password") != value ? "Not match password" : true
            }
          })}
          placeholder={"Verify Password"}
        />
        <span>
          {errors?.verifyPassword?.message}
        </span>
        <button>Add</button>
        <span>
          {errors?.serverError?.message}
        </span>
      </form>
    </div>
  );
}

export default ToDoList;