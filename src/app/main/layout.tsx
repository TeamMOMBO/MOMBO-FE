import NavBar from '<prefix>/components/common/bar/navbar/navBar';

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
