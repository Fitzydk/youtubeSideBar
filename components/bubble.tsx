type bubbleObj = {
  content: string;
  isActive: boolean;
  difficulty: string;
};
type Props = {
  data: bubbleObj;
};

const View = ({ data }: Props) => {
  return (
    <div>
      <div
        className={`flex relative flex-row px-5 py-2 tracking-wider items-center justify-left ${
          data.isActive ? "bg-gray-500" : ""
        }`}
      >
        <p className={`uppercase text-xl antialiased`}>{data.content}</p>
        <span
          className={` ${
            data.difficulty == "easy"
              ? "bg-green-600"
              : data.difficulty == "medium"
              ? "bg-orange-600"
              : data.difficulty == "hard"
              ? "bg-red-600"
              : "bg-gray-400"
          } w-3 h-3 absolute bottom-auto left-1`}
        ></span>
      </div>
    </div>
  );
};

export default View;
