import React from 'react'
import Header from '../../components/Header/Header'
import Section from '../../components/_UI/Section/Section'
import Showcase from '../../components/Showcase'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Layout from '../../components/Layout/Layout'

export default function Home() {
  const navLinks = [
    { label: 'Conheça a Linx', href: 'javascript:void(0)' },
    { label: 'Ajude o Algoritmo', href: 'javascript:void(0)' },
    { label: 'Seus produtos', href: 'javascript:void(0)' },
    { label: 'Compartilhe', href: 'javascript:void(0)' }
  ]

  return (
    <Layout>
      <Header
        className="bg-orange-gradient"
        navLinks={navLinks}
        headline={['uma seleção de produtos', 'especial para você']}
        description={
          'Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!'
        }
      />
      <Section title="Sua seleção especial">
        <Showcase />
      </Section>
      <Section
        title="Compartilhe a novidade"
        subtitle="Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"
      >
        <NewsLetter />
      </Section>
    </Layout>
  )
}
