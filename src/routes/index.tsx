import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";

import heroAsset from "@/assets/casting-hero.jpg.asset.json";
import combAsset from "@/assets/editorial-comb.jpg.asset.json";
import knitAsset from "@/assets/editorial-knit.jpg.asset.json";
import portraitAsset from "@/assets/editorial-portrait.jpg.asset.json";
import poloAsset from "@/assets/editorial-black-polo.jpg.asset.json";
import layeredAsset from "@/assets/editorial-layered.jpg.asset.json";
import monoAsset from "@/assets/editorial-monochrome.jpg.asset.json";
import carAsset from "@/assets/editorial-car.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casting Masculino | Novos Talentos" },
      { name: "description", content: "Casting profissional para novos modelos masculinos. Inscreva-se para campanhas, publicidade e projetos de moda." },
      { property: "og:title", content: "Casting Masculino | Novos Talentos" },
      { property: "og:description", content: "Seu rosto pode ser o próximo destaque da moda. Envie sua candidatura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CastingPage,
});

const profile = [
  ["01", "Idade", "Homens maiores de 18 anos"],
  ["02", "Presença", "Boa presença diante das câmeras"],
  ["03", "Identidade", "Diferentes estilos e personalidades"],
  ["04", "Experiência", "Com ou sem experiência profissional"],
];

const process = ["Cadastro", "Avaliação do perfil", "Contato da equipe", "Possíveis oportunidades"];

const gallery = [
  { src: knitAsset.url, alt: "Modelo masculino em editorial de moda com tricô marrom", span: "gallery-tall" },
  { src: monoAsset.url, alt: "Retrato masculino editorial em preto e branco", span: "gallery-short" },
  { src: combAsset.url, alt: "Editorial masculino em preto e branco", span: "gallery-wide" },
  { src: layeredAsset.url, alt: "Modelo masculino em produção de moda neutra", span: "gallery-short" },
  { src: carAsset.url, alt: "Modelo masculino em campanha editorial automotiva", span: "gallery-tall" },
  { src: portraitAsset.url, alt: "Retrato de beleza masculino", span: "gallery-short" },
  { src: poloAsset.url, alt: "Modelo masculino vestindo polo preta", span: "gallery-tall" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function CastingPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState(0);

  const goToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Casting Masculino — início">CASTING<br />MASCULINO</a>
        <nav aria-label="Navegação principal">
          <a href="#casting">O casting</a>
          <a href="#perfil">Perfil</a>
          <a href="#editorial">Editorial</a>
        </nav>
        <button className="header-cta" type="button" onClick={goToForm}>Inscreva-se <Arrow /></button>
      </header>

      <section className="hero" id="top">
        <img src={heroAsset.url} alt="Modelo masculino em fotografia editorial de moda" fetchPriority="high" />
        <div className="hero-shade" />
        <p className="hero-index">CASTING ABERTO<br />BRASIL · 2026</p>
        <div className="hero-copy">
          <h1>Seu rosto pode ser<br />o próximo destaque<br />da moda.</h1>
          <div className="hero-bottom">
            <p>Estamos buscando novos talentos masculinos para campanhas, publicidade e trabalhos fashion.</p>
            <button type="button" className="light-cta" onClick={goToForm}>Quero participar do casting <Arrow /></button>
          </div>
        </div>
      </section>

      <section className="intro section-pad" id="casting">
        <p className="kicker">01 — O casting</p>
        <div className="intro-grid">
          <h2>Mais que um rosto.<br /><em>Uma presença.</em></h2>
          <div>
            <p className="lead">Buscamos homens com personalidade, presença e potencial para representar marcas e projetos de moda.</p>
            <div className="disciplines" aria-label="Áreas de atuação">
              {['Trabalhos comerciais', 'Campanhas', 'Fotografia', 'Moda'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="profile section-pad" id="perfil">
        <div className="profile-head">
          <p className="kicker">02 — Perfil procurado</p>
          <h2>Não existe<br />um único padrão.</h2>
        </div>
        <div className="profile-list">
          {profile.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-pad">
        <p className="kicker">03 — Como funciona</p>
        <h2>Um processo direto.<br />Uma seleção cuidadosa.</h2>
        <ol>
          {process.map((item, index) => (
            <li key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></li>
          ))}
        </ol>
      </section>

      <section className="editorial" id="editorial">
        <div className="editorial-title section-pad">
          <p className="kicker">04 — Editorial</p>
          <h2>Novos rostos.<br /><em>Novas narrativas.</em></h2>
        </div>
        <div className="gallery">
          {gallery.map((image, index) => (
            <figure className={image.span} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>Editorial {String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="application section-pad" ref={formRef} id="inscricao">
        <div className="form-intro">
          <p className="kicker">05 — Inscrição</p>
          <h2>Apresente-se.</h2>
          <p>Preencha seus dados com atenção. Nossa equipe avalia cada perfil individualmente.</p>
        </div>

        {sent ? (
          <div className="success" role="status">
            <p className="kicker">Candidatura recebida</p>
            <h2>Obrigado pelo seu interesse.</h2>
            <p>Seu perfil foi preparado para avaliação. Esta demonstração não envia os dados para uma agência.</p>
            <button type="button" className="dark-cta" onClick={() => setSent(false)}>Enviar outra candidatura <Arrow /></button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <label className="field field-wide">Nome completo<input name="name" required maxLength={100} autoComplete="name" /></label>
            <label className="field">Idade<input name="age" type="number" min="18" max="100" required inputMode="numeric" /></label>
            <label className="field">Cidade<input name="city" required maxLength={80} autoComplete="address-level2" /></label>
            <label className="field">Telefone<input name="phone" type="tel" required maxLength={20} autoComplete="tel" /></label>
            <label className="field">Instagram<input name="instagram" maxLength={50} placeholder="@seuperfil" /></label>
            <label className="field">Altura<input name="height" required maxLength={10} placeholder="Ex.: 1,82 m" /></label>
            <label className="field field-wide">Experiência<textarea name="experience" maxLength={600} rows={3} placeholder="Conte brevemente sobre você e sua experiência, se houver." /></label>
            <label className="upload field-wide">
              <input type="file" accept="image/jpeg,image/png,image/webp" multiple required onChange={(e) => setFiles(e.currentTarget.files?.length ?? 0)} />
              <span>Upload de fotos</span><strong>{files ? `${files} foto${files > 1 ? 's' : ''} selecionada${files > 1 ? 's' : ''}` : 'Selecione de 2 a 5 fotos naturais'}</strong><b>＋</b>
            </label>
            <p className="privacy field-wide">Ao enviar, você confirma que tem mais de 18 anos e autoriza a análise das imagens para fins de casting.</p>
            <button className="dark-cta field-wide" type="submit">Enviar candidatura <Arrow /></button>
          </form>
        )}
      </section>

      <section className="final-cta">
        <img src={combAsset.url} alt="Modelo em sessão editorial de moda" loading="lazy" />
        <div className="final-shade" />
        <div>
          <p className="kicker">Seu próximo capítulo</p>
          <h2>Pronto para começar<br />sua jornada como modelo?</h2>
          <button type="button" className="light-cta" onClick={goToForm}>Faça sua inscrição <Arrow /></button>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">CASTING<br />MASCULINO</a>
        <p>Novos talentos · Brasil</p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}