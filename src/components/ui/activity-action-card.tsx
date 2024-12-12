type ActivityActionCardProps = {
  title: string;
  heading: string;
  subHeading: string;
  buttonText: string;
};

const ActivityActionCard: React.FC<ActivityActionCardProps> = ({
  title,
  heading,
  subHeading,
  buttonText,
}) => {
  return (
    <div className="bg-card-4 rounded-3xl p-2.5">
      <span className="text-xl px-2.5">{title}</span>
      <div className="bg-card-3 rounded-2xl p-4 flex items-center justify-between mt-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium">{heading}</span>
          <span className="text-xs text-white/50">{subHeading}</span>
        </div>
        <button className="rounded-full px-5 py-0.5 bg-secondary text-secondary-foreground leading-loose">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActivityActionCard;
