import Image from "next/image"

type buttonProps = {
  type: 'button' | 'submit',
  title: string,
  icon?: string,
  variant: string
}

const Button = ({type, title, icon, variant}: buttonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} width={24} height={24} alt="image" />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </button>
  )
}

export default Button