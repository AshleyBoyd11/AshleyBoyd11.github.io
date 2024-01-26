type PageContentProps = {
  content: string;
};
export const PageContent = (props: PageContentProps) => {
  const content = props.content;

  return <div>{content}</div>;
};
