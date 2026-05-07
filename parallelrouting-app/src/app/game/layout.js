
export default function GameLayout(props) {
    return <div id="GameLayout">
        {/* Game Page */}
        {props.children}
        {/* Access player page */}
        {props.player}
        {/* Access Team Page / */}
        {props.team} 
    </div>
}