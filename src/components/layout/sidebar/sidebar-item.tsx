type SidebarSubItemProps = {
  label: string;
  icon: React.ReactNode;
};

type SidebarItemProps = {
  label: string;
  subItems?: SidebarSubItemProps[];
};
const SidebarItem: React.FC<SidebarItemProps> = ({ label, subItems }) => {
  return (
    <li className="">
      <button className="text-left font-medium text-lg px-7 py-1.5">
        {label}
      </button>
      {subItems && (
        <ul className="flex flex-col gap-3 px-7 text-foreground-secondary">
          {subItems.map((subItem) => (
            <li key={subItem.label}>
              <button className="flex items-center gap-4 text-sm pl-7 hover:text-white duration-200">
                {subItem.icon}
                <span className="leading-loose">{subItem.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
