import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';
type ContentProps = {
  children: React.ReactNode;
};

export default function ContentLayout({ children }: ContentProps) {
  return (
    <>
      <>
        <MainTopBar>콘텐츠</MainTopBar>
        {children}
      </>
      <NavBar />
    </>
  );
}
