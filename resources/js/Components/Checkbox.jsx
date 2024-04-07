export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-brown-500 shadow-sm focus:ring-brown-500 ' +
                className
            }
        />
    );
}
