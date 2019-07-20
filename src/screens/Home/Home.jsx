import React from 'react'
import Header from '../../components/Header/Header'
import Section from '../../components/_UI/Section/Section'
import Showcase from '../../components/Showcase'

export default function Home() {
  const navLinks = [
    { label: 'Conheça a Linx', href: 'javascript:void(0)' },
    { label: 'Ajude o Algoritmo', href: 'javascript:void(0)' },
    { label: 'Seus produtos', href: 'javascript:void(0)' },
    { label: 'Compartilhe', href: 'javascript:void(0)' }
  ]

  return (
    <div>
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
    </div>
  )
}
