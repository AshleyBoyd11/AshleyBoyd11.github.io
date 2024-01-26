import "./Header.scss";

export type MenuItem = {
  name: string;
};

type HeaderProps = {
  menuItems: MenuItem[];
};

export const Header = ({ menuItems }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-title">TDRogueLite</div>
      {menuItems.map((Item) => (
        <div className="menu-item">{Item.name}</div>
      ))}
    </div>
  );
};
