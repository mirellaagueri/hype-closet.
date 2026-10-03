"use client";

import { useState } from "react";

const produtos = [
  ["Blusa Zara Gola Alta - Preto", 35, "Preto", "P", 1],
  ["Blusa Zara Gola Alta - Azul Marinho", 35, "Azul Marinho", "P / M", 2],
  ["Blusa Zara Gola Alta - Marrom", 35, "Marrom", "P / M", 2],
  ["Blusa Corset - Preto", 48, "Preto", "Tamanho único", 1],
  ["Blusa Corset - Marrom", 48, "Marrom", "Tamanho único", 1],
  ["Blusa Corset - Pérola", 48, "Pérola", "Tamanho único", 1],
  ["Cropped Decote Reto - Off-White", 35, "Off-White", "P / M", 2],
  ["Cropped Decote Reto - Preto", 35, "Preto", "P / M", 2],
  ["Saia Longa - Marrom", 60, "Marrom", "P / M", 2],
  ["Saia Longa - Preto", 60, "Preto", "P", 1],
  ["Blusa Laço Frontal - Off-White", 38, "Off-White", "P / M", 2],
  ["Saia Longa - Off-White", 60, "Off-White", "P / M", 2],
  ["Blusa Laço Frontal - Preto", 38, "Preto", "P / M", 1],
  ["Saia Curta Cintura Baixa - Preto", 45, "Preto", "P / M", 2],
  ["Blusa Laço Frontal - Marrom", 38, "Marrom", "P / M", 2],
  ["Saia Curta Cintura Baixa - Off-White", 45, "Off-White", "P / M", 2],
  ["Saia Fenda - Vermelha", 20, "Vermelho", "Tamanho único", 3],
  ["Calça Pantalona - Off-White", 75, "Off-White", "Tamanho único", 2],
  ["Short Soltinho - Off-White", 40, "Off-White", "Tamanho único", 3],
  ["Short Soltinho - Preto", 40, "Preto", "Tamanho único", 2],
];

const fotos = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
];

const dinheiro = (valor) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  function adicionar(produto, tamanho) {
    setCarrinho([
      ...carrinho,
      {
        nome: produto[0],
        preco: produto[1],
        tamanho,
      },
    ]);

    setProdutoSelecionado(null);
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
        color: "#111",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "#ef86b0",
          textAlign: "center",
          padding: "9px",
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        FRETE GRÁTIS PARA COMPRAS ACIMA DE R$ 299,00
      </div>

      <header
        style={{
          background: "#050505",
          color: "#fff",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: "#ef86b0",
            fontSize: "42px",
            fontWeight: "900",
            letterSpacing: "7px",
          }}
        >
          HYPE
        </div>

        <div
          style={{
            color: "#fff",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "25px",
          }}
        >
          closet ♡
        </div>

        <nav style={{ marginTop: "22px" }}>
          <a href="#inicio" style={link}>INÍCIO</a>
          <a href="#produtos" style={link}>NOVIDADES</a>
          <a href="#produtos" style={link}>ROUPAS</a>
          <a href="#produtos" style={link}>CONJUNTOS</a>
          <a href="#produtos" style={link}>ACESSÓRIOS</a>
          <a href="#sale" style={link}>SALE</a>
        </nav>
      </header>

      <section
        id="inicio"
        style={{
          background: "#191919",
          color: "#fff",
          padding: "90px 8%",
          minHeight: "430px",
        }}
      >
        <p style={{ letterSpacing: "3px" }}>SEU ESTILO. SUA VIBE.</p>

        <h1
          style={{
            fontSize: "85px",
            color: "#ef86b0",
            margin: "10px 0",
          }}
        >
          HYPE
        </h1>

        <div
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "55px",
          }}
        >
          closet ♡
        </div>

        <p style={{ maxWidth: "400px", lineHeight: "1.6" }}>
          Peças exclusivas para você que ama se destacar por onde passa.
        </p>

        <a href="#produtos">
          <button style={botao}>COMPRAR AGORA</button>
        </a>
      </section>

      <section
        style={{
          background: "#050505",
          color: "#fff",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "20px",
          gap: "15px",
          textAlign: "center",
        }}
      >
        <div>🚚 FRETE GRÁTIS<br /><small>acima de R$299</small></div>
        <div>💳 ATÉ 6X<br /><small>sem juros</small></div>
        <div>🔒 COMPRA SEGURA<br /><small>dados protegidos</small></div>
        <div>🎁 10% OFF<br /><small>cupom HYPE10</small></div>
      </section>

      <section id="produtos" style={{ padding: "55px 5%" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          NOVIDADES
        </h2>

        <div
          style={{
            width: "55px",
            height: "4px",
            background: "#ef86b0",
            margin: "12px auto 35px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "25px",
          }}
        >
          {produtos.map((produto, index) => (
            <article key={index}>
              <div
                style={{
                  height: "310px",
                  background: "#eee",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`/products/${fotos[index]}.jpg`}
                  alt={produto[0]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <h3 style={{ fontSize: "14px" }}>{produto[0]}</h3>

              <strong style={{ fontSize: "17px" }}>
                {dinheiro(produto[1])}
              </strong>

              <p style={{ color: "#777", fontSize: "12px" }}>
                {produto[2]} · {produto[3]}
              </p>

              <button
                style={{
                  ...botao,
                  width: "100%",
                  marginTop: "5px",
                }}
                onClick={() => setProdutoSelecionado(produto)}
              >
                VER PRODUTO
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        id="sale"
        style={{
          background: "#ef86b0",
          padding: "55px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "45px", margin: "5px" }}>10% OFF</h2>
        <p>
          Use o cupom <strong>HYPE10</strong> na sua primeira compra.
        </p>
      </section>

      <footer
        style={{
          background: "#050505",
          color: "#fff",
          padding: "45px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#ef86b0" }}>HYPE</h2>
        <p>closet ♡</p>
        <p>Seu estilo. Sua vibe.</p>
      </footer>

      {produtoSelecionado && (
        <div style={fundo}>
          <div style={modal}>
            <button
              style={fechar}
              onClick={() => setProdutoSelecionado(null)}
            >
              ×
            </button>

            <img
              src={`/products/${
                fotos[produtos.indexOf(produtoSelecionado)]
              }.jpg`}
              alt={produtoSelecionado[0]}
              style={{
                width: "100%",
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />

            <h2>{produtoSelecionado[0]}</h2>

            <h3>{dinheiro(produtoSelecionado[1])}</h3>

            <p>Escolha o tamanho:</p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {produtoSelecionado[3]
                .split(" / ")
                .map((tamanho) => (
                  <button
                    key={tamanho}
                    onClick={() =>
                      adicionar(produtoSelecionado, tamanho)
                    }
                    style={{
                      padding: "12px 20px",
                      background: "#fff",
                      border: "1px solid #111",
                      cursor: "pointer",
                    }}
                  >
                    {tamanho}
                  </button>
                ))}
            </div>

            <p style={{ color: "#777" }}>
              Estoque disponível: {produtoSelecionado[4]}
            </p>
          </div>
        </div>
      )}

      {carrinho.length > 0 && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            background: "#050505",
            color: "#fff",
            padding: "18px 25px",
            borderRadius: "8px",
            zIndex: 10,
          }}
        >
          🛍️ {carrinho.length} item(ns) · {dinheiro(total)}
        </div>
      )}
    </main>
  );
}

const link = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 12px",
  fontSize: "11px",
  fontWeight: "bold",
};

const botao = {
  background: "#ef86b0",
  color: "#111",
  border: "none",
  padding: "14px 24px",
  fontWeight: "bold",
  cursor: "pointer",
};

const fundo = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.75)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  zIndex: 20,
};

const modal = {
  background: "#fff",
  padding: "25px",
  maxWidth: "600px",
  width: "100%",
  maxHeight: "90vh",
  overflow: "auto",
  position: "relative",
};

const fechar = {
  position: "absolute",
  right: "10px",
  top: "5px",
  background: "#fff",
  border: "none",
  fontSize: "30px",
  cursor: "pointer",
};
