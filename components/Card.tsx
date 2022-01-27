import React from 'react'

interface CardProps {
  href: string
  title: string
  desc: string
}

const Card: React.FC<CardProps> = ({ href, title, desc }) => {
  return (
    <a
      href={href}
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
    >
      <h3 className="text-2xl font-bold">{title} &rarr;</h3>
      <p className="mt-4 text-xl">{desc}</p>
    </a>
  )
}

export default Card
