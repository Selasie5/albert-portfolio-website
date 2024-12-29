
const ResearchInterestCard = ({interest}:
    {interest: string}
) => {
  return (
    <div className="shadow-lg w-full px-10 py-3 bg-primary/10 border-2 border-primary/80 text-primary  font-DM hover:font-bold hover:cursor-pointer">
       <span>{interest}</span> 
    </div>
  )
}

export default ResearchInterestCard
