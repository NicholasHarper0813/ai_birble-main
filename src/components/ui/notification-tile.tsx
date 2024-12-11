import { cn } from "@/lib/utils";

type NotificationProps = {
  time: string;
  message: string;
  red?: boolean;
};
const NotificationTile: React.FC<NotificationProps> = ({
  time,
  message,
  red,
}) => {
  return (
    <li
      className={cn(
        "relative flex flex-col leading-loose text-sm pl-8 py-1 before:content-[''] before:absolute before:h-full before:top-0 before:left-0 before:rounded-full before:w-2",
        red ? "before:bg-[#6565A2]" : "before:bg-white"
      )}
    >
      <span className="text-[#6565A2]">{time}</span>
      <p>{message}</p>
    </li>
  );
};

export default NotificationTile;
