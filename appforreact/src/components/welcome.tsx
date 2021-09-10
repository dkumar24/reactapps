interface WelcomeProps
{
    name:string
}
export function Welcome(props:WelcomeProps)
{
    return <div>{props.name}</div>
}