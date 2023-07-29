import './layout.module.css';

const Footer = () => {
  return (
    <footer class="footer bg-dark py-5">
    <div class="container grid grid-3">
        <div>
            <h1>NT News
            </h1>
            <p>Copyright &copy; 2023</p>
        </div>
        <div class="social">
            <a href="https://github.com/Bubseatbubs/nt-news"><i class="icon navlink fab fa-github fa-4x"></i></a>
        </div>
    </div>
    </footer>
  );
};

export default Footer;

