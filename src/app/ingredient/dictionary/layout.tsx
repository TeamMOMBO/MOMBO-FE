import NavBar from '<prefix>/components/common/bar/navbar/navBar';

type ContentProps = {
  children: React.ReactNode;
};

export default function IngredientDictionaryLayout({ children }: ContentProps) {
  return (
    <>
      {children}
      <NavBar />
    </>
  );
}
