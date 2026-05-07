export default function PanellLayout(props) {
    const isAdmin = false
    return <div id="PanelLayout">
        {/* Panel Page */}
        {props.children}
        {/* Admin or User Page */}
        {isAdmin ? props.admin : props.user}
        
    </div>
}