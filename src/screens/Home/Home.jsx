import React from 'react'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu'

export default function Home() {
  const navLinks = [
    { label: 'Conheça a Linx', href: 'javascript:void(0)' },
    { label: 'Ajude o Algoritmo', href: 'javascript:void(0)' },
    { label: 'Seus produtos', href: 'javascript:void(0)' },
    { label: 'Compartilhe', href: 'javascript:void(0)' }
  ]

  const headline = ['uma seleção de produtos', 'especial para você']
  const headDescription =
    'Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!'

  return (
    <div className="container-fluid">
      <Header
        className="bg-orange-gradient"
        headline={headline}
        description={headDescription}
        navLinks={navLinks}
      />
    </div>
  )
}
