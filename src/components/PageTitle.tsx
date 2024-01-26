import "./PageTitle.scss";

type TitleProps = {
  title: string;
};

export const PageTitle = (props: TitleProps) => {
  const titleText = props.title;
  return (
    <div className="page-title-container">
      <h1 className="page-title-text">{titleText}</h1>
    </div>
  );
};
