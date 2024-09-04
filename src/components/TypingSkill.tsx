import { TypeAnimation } from 'react-type-animation';

export interface TypingSkillsProps {
    skills: Array<string>;
    delay: number;
    speed: 10 | 20 | 30
}

const TypingSkill:React.FC<TypingSkillsProps> = (props) => {
  const skills:Array<string | number> = props.skills.reduce<Array<string | number>>((acc:Array<string | number>,curr:string)=>{
        acc.push(curr);
        acc.push(props.delay)
        return acc;
    },[]);

  return (
    <TypeAnimation
      sequence={skills}
      wrapper="div"
      speed={props.speed}
      style={{ fontSize: '2em', display: 'inline-block', lineHeight: 1.1 }}
      repeat={Infinity}
    />
  );
};

export default TypingSkill;