import AnimatedNavBar from '<prefix>/components/common/bar/navbar/animatedNavBar';

type ContentProps = {
  children: React.ReactNode;
};

export default function FAQLayout({ children }: ContentProps) {
  return (
    <>
      {children}
      {/* <AnimatedNavBar /> */}
    </>
  );
}
