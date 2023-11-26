<button {{ $attributes->merge(['type' => 'submit', 'class' =>
    'inline-flex items-center px-4 py-2 dark:bg-gray-900
    border border-transparent rounded-md font-semibold text-xs text-gray-500
    dark:text-gray-400 uppercase tracking-widest hover:text-gray-700
    dark:hover:text-gray-300 focus:bg-gray-700 focus:outline-none transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
