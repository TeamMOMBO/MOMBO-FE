import BackTopBar from '<prefix>/components/common/bar/backTopBar';

type Props = {
  children: React.ReactNode;
};

export default async function AccountEditPageLayout({ children }: Props) {
  return (
    <>
      <BackTopBar />
      {children}
    </>
  );
}
