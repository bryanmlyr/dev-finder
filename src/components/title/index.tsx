import style from "./style.module.css";

type titleProps = {
    title?: String
}

const Title = ({ title }: titleProps) => {
    return (
        <h1 className={style.textContainer}>
            {title}
        </h1>
    );
};

export default Title;