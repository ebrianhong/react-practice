export default function HolyGrail() {
  return (
    <>
      <header className="bg-red-500 p-10">Header</header>
      <div className="content flex w-full grow ">
        <nav className="shrink-0 bg-red-300 p-10">Navigation</nav>
        <main className="grow bg-red-100 p-10">Main</main>
        <aside className="shrink-0 bg-red-300 p-10">Sidebar</aside>
      </div>
      <footer className="bg-red-500 p-10">Footer</footer>
    </>
  );
}
