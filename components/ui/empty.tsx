import Image from "next/image";

interface EmptyProps {
  label: string;
}
const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="flex h-full p-20 flex-col justify-center items-center">
      <div className="relative w-72 h-72">
        <Image fill alt="image empty" src="/empty.png" />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default Empty;
