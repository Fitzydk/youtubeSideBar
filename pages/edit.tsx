import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

type bubbleObj = {
  content: string;
  isActive: boolean;
  difficulty: string;
};

const Edit: NextPage = () => {
  const [content, setContent] = useState<bubbleObj[]>([]);

  useEffect(() => {
    fetch("./api/getJson")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const updateJson = async (content: bubbleObj[]) => {
    await fetch("./api/updateJson", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });
  };

  const upBubble = () => {
    let tempContent: bubbleObj[] = content;
    for (var i = 0; i < tempContent.length; i++) {
      if (tempContent[i].isActive == true) {
        if (i == 0) {
          tempContent[i].isActive = false;
          tempContent[tempContent.length - 1].isActive = true;
          break;
        } else {
          tempContent[i].isActive = false;
          tempContent[i - 1].isActive = true;
          break;
        }
      }
    }
    setContent([...tempContent]);
    updateJson(tempContent);
  };

  const downBubble = () => {
    let tempContent: bubbleObj[] = content;
    for (var i = 0; i < tempContent.length; i++) {
      if (tempContent[i].isActive == true) {
        if (i == tempContent.length - 1) {
          tempContent[i].isActive = false;
          tempContent[0].isActive = true;
          break;
        } else {
          tempContent[i].isActive = false;
          tempContent[i + 1].isActive = true;
          break;
        }
      }
    }
    setContent([...tempContent]);
    updateJson(tempContent);
  };

  const updateDifficulty = (id: number) => {
    let tempContent: bubbleObj[] = content;
    let diff = tempContent[id].difficulty;
    tempContent[id].difficulty =
      diff == "easy"
        ? "medium"
        : diff == "medium"
        ? "hard"
        : diff == "hard"
        ? "easy"
        : "";
    setContent([...tempContent]);
    updateJson(tempContent);
  };

  const changeBubbleText = (id: number, value: string) => {
    let tempContent: bubbleObj[] = content;
    tempContent[id].content = value;
    updateJson(tempContent);
  };

  const removeBubble = (id: number) => {
    let tempContent: bubbleObj[] = content;
    tempContent.splice(id, 1);
    setContent([...tempContent]);
    updateJson(tempContent);
  };

  const addBubble = () => {
    let tempContent: bubbleObj[] = content;
    tempContent[tempContent.length] = {
      content: "",
      isActive: false,
      difficulty: "easy",
    };
    setContent([...tempContent]);
    updateJson(tempContent);
  };

  return (
    <>
      <Head>
        <title>Side bar Application</title>
      </Head>
      <div className="flex flex-row justify-end items-start h-screen w-screen">
        <div className="w-fit">
          {content.map((data: bubbleObj, index: number) => {
            return (
              <div key={index}>
                <div
                  className={`flex relative border-solid border border-slate-800 mb-2 mr-1 rounded-2xl flex-row p-8 items-center justify-center ${
                    data.isActive ? "bg-amber-300" : "bg-amber-500"
                  }`}
                >
                  <div
                    className="cursor-pointer bg-red-500 absolute top-2 right-2 rounded-full px-2 text-white font-black"
                    onClick={() => {
                      removeBubble(index);
                    }}
                  >
                    X
                  </div>
                  <p
                    className={`uppercase font-bold text-xl antialiased w-full`}
                    contentEditable="true"
                    placeholder={"test"}
                    suppressContentEditableWarning={true}
                    onInput={(e) => {
                      changeBubbleText(index, e.target.innerText);
                    }}
                  >
                    {data.content}
                  </p>
                  <span
                    className={`rounded-full cursor-pointer ${
                      data.difficulty == "easy"
                        ? "bg-green-600"
                        : data.difficulty == "medium"
                        ? "bg-orange-600"
                        : data.difficulty == "hard"
                        ? "bg-red-600"
                        : "bg-gray-400"
                    } w-6 h-6 absolute bottom-auto left-1`}
                    onClick={() => {
                      updateDifficulty(index);
                    }}
                  ></span>
                </div>
              </div>
            );
          })}
          <div className="flex flex-1 items-center justify-center">
            <div
              className="cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex"
              onClick={() => {
                addBubble();
              }}
            >
              <p className="text-2xl text-white">Add</p>
            </div>
            <div
              className="cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex"
              onClick={() => {
                upBubble();
              }}
            >
              <p className="text-2xl text-white">UP</p>
            </div>
            <div
              className="cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex"
              onClick={() => {
                downBubble();
              }}
            >
              <p className="text-2xl text-white">DOWN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
