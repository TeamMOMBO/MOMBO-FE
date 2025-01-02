import MainTopBar from '<prefix>/components/common/bar/mainTopBar';
import NavBar from '<prefix>/components/common/bar/navbar/navBar';
import ContentSkeleton from '<prefix>/components/common/skeleton/content/contentSkeleton';

export default async function ContentLoading() {
  return (
    <>
      <MainTopBar>콘텐츠</MainTopBar>
      <ContentSkeleton />
      <NavBar />
    </>
  );
}
