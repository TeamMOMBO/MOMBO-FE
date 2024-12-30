import NavBar from '<prefix>/components/common/bar/navbar/navBar';

type Props = {
  children: React.ReactNode;
};

export default function MyPageLayout({ children }: Props) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
