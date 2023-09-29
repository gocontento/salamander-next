import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal">
            <div className="hidden md:flex md:flex-col lg:flex-row md:items-center lg:justify-between lg:py-20 md:py-12  md:px-7 lg:px-24">
                <div className="text-white flex flex-col justify-center text-center lg:items-start mb-5 md:basis-1/3">
                    <Link href="/#features" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Features</Link>
                    <Link href="/#pricing" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Pricing</Link>
                    <Link href="/blog" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Blog</Link>
                </div>
                <div className="flex flex-col justify-center items-center order-last mt-5 md:mt-0">
                    <Link href="/" className="mt-5 mb-12 mx-auto">
                        <svg width="49" height="57" viewBox="0 0 49 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.3458 38.9031C42.6097 39.8899 42.7634 43.6069 41.4053 45.961C39.953 48.5824 37.3384 50.3605 34.3617 50.7464C31.6653 51.0629 28.5426 50.1132 27.3827 47.472C26.1907 44.6725 27.4596 41.5589 28.7161 39.034C29.8016 36.8552 31.5141 33.932 33.9305 32.9947C36.85 31.862 38.0172 34.983 40.4659 35.678C43.0037 36.405 44.9517 34.2412 46.0991 32.2849C47.7794 29.4359 48.0025 26.4213 45.1475 24.3065C43.3532 22.971 40.5229 21.9645 38.2948 22.7806C35.9082 23.661 35.3258 26.782 32.2799 26.8958C29.9503 26.9848 28.2328 25.1226 27.2539 23.1986C25.2936 19.3233 28.9416 18.3242 32.0197 17.9681C34.3294 17.701 36.778 16.9739 36.1188 14.0235C35.3579 10.6107 31.7346 9.32464 29.5262 10.6107C27.432 11.8324 27.4891 14.1744 25.0851 15.0869C22.0145 16.2592 20.6439 14.5923 20.7703 11.6048C20.9042 8.94629 21.4048 6.70567 20.059 4.23041C18.9141 2.06893 16.1161 -0.104908 13.4893 0.00392322C11.021 0.112741 10.1263 4.25764 10.1833 6.33498C10.2527 9.16421 12.0866 11.5259 14.104 13.3561C15.3084 14.4517 18.622 15.75 18.3493 17.7879C17.8983 21.124 13.2168 18.2998 11.7568 17.5406C9.45939 16.3436 6.93398 16.0345 5.41232 18.4828C3.97739 20.7481 4.70104 24.5987 7.63288 25.3824C9.97983 26.0155 12.8869 23.6092 15.2463 23.3446C17.2958 23.117 21.2041 23.5399 21.3429 26.3321C21.5015 29.4976 17.4346 29.5619 15.3603 29.4605C12.0492 29.2948 9.59326 27.7961 6.478 27.1358C-0.101858 25.7435 -0.724251 34.6071 0.520154 38.8109C1.1992 41.1158 2.65152 43.1412 5.33548 42.3622C8.16569 41.5461 9.52385 38.1209 11.7491 36.3848C13.8185 34.7773 18.8543 32.6505 20.6314 35.9026C21.7491 37.9676 19.5533 40.9674 19.0007 42.956C17.6054 47.7389 18.4951 53.3181 23.3551 55.7169C29.7814 58.8824 36.6785 55.6353 42.1925 51.9875C44.6807 50.3404 47.5159 48.3966 48.6384 45.5058C49.6918 42.7829 48.398 39.4715 45.3522 38.9152C44.6335 39.1625 45.4265 38.9201 45.3448 38.9028L45.3458 38.9031ZM13.9977 6.78563C13.2493 7.87381 11.6185 7.06509 12.3868 5.79146C13.0708 4.6192 14.5801 5.92995 13.9977 6.78563ZM17.8044 5.34879C17.2765 6.47401 14.9742 5.06933 15.7474 3.71411C16.5851 2.22036 18.3372 4.31013 17.8292 5.34879H17.8044ZM27.7843 35.3124C28.2403 36.7369 25.8809 36.5786 25.8115 35.812C25.7099 34.8252 27.4026 34.1278 27.7843 35.3124Z" fill="#FFB800"/>
                        </svg>
                    </Link>
                    <h3 className="mt-5 uppercase tracking-wider font-semibold text-white text-opacity-40 flex gap-4 items-center">
                        Powered by
                        <Link href="https://www.contento.io">
                            <img className="w-[130px] pb-2 hover:opacity-60" src="/Contento-Logo.png"/>
                        </Link>
                    </h3>
                </div>
                <div className="text-white flex flex-col justify-center text-center lg:items-end lg:order-last mb-5 md:basis-1/3">
                    <Link href="/#get-started" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Get Started</Link>
                    <Link href="/terms-and-conditions" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Terms and Conditions</Link>
                    <Link href="/privacy-policy" className="block text-sm px-2 py-4 text-white hover:text-pink transition duration-300">Privacy Policy</Link>
                </div>
            </div>

            <div className="md:hidden flex flex-col justify-center px-9 py-10">
                <Link href="/" className="mt-5 mb-12 mx-auto">
                    <svg width="49" height="57" viewBox="0 0 49 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.3458 38.9031C42.6097 39.8899 42.7634 43.6069 41.4053 45.961C39.953 48.5824 37.3384 50.3605 34.3617 50.7464C31.6653 51.0629 28.5426 50.1132 27.3827 47.472C26.1907 44.6725 27.4596 41.5589 28.7161 39.034C29.8016 36.8552 31.5141 33.932 33.9305 32.9947C36.85 31.862 38.0172 34.983 40.4659 35.678C43.0037 36.405 44.9517 34.2412 46.0991 32.2849C47.7794 29.4359 48.0025 26.4213 45.1475 24.3065C43.3532 22.971 40.5229 21.9645 38.2948 22.7806C35.9082 23.661 35.3258 26.782 32.2799 26.8958C29.9503 26.9848 28.2328 25.1226 27.2539 23.1986C25.2936 19.3233 28.9416 18.3242 32.0197 17.9681C34.3294 17.701 36.778 16.9739 36.1188 14.0235C35.3579 10.6107 31.7346 9.32464 29.5262 10.6107C27.432 11.8324 27.4891 14.1744 25.0851 15.0869C22.0145 16.2592 20.6439 14.5923 20.7703 11.6048C20.9042 8.94629 21.4048 6.70567 20.059 4.23041C18.9141 2.06893 16.1161 -0.104908 13.4893 0.00392322C11.021 0.112741 10.1263 4.25764 10.1833 6.33498C10.2527 9.16421 12.0866 11.5259 14.104 13.3561C15.3084 14.4517 18.622 15.75 18.3493 17.7879C17.8983 21.124 13.2168 18.2998 11.7568 17.5406C9.45939 16.3436 6.93398 16.0345 5.41232 18.4828C3.97739 20.7481 4.70104 24.5987 7.63288 25.3824C9.97983 26.0155 12.8869 23.6092 15.2463 23.3446C17.2958 23.117 21.2041 23.5399 21.3429 26.3321C21.5015 29.4976 17.4346 29.5619 15.3603 29.4605C12.0492 29.2948 9.59326 27.7961 6.478 27.1358C-0.101858 25.7435 -0.724251 34.6071 0.520154 38.8109C1.1992 41.1158 2.65152 43.1412 5.33548 42.3622C8.16569 41.5461 9.52385 38.1209 11.7491 36.3848C13.8185 34.7773 18.8543 32.6505 20.6314 35.9026C21.7491 37.9676 19.5533 40.9674 19.0007 42.956C17.6054 47.7389 18.4951 53.3181 23.3551 55.7169C29.7814 58.8824 36.6785 55.6353 42.1925 51.9875C44.6807 50.3404 47.5159 48.3966 48.6384 45.5058C49.6918 42.7829 48.398 39.4715 45.3522 38.9152C44.6335 39.1625 45.4265 38.9201 45.3448 38.9028L45.3458 38.9031ZM13.9977 6.78563C13.2493 7.87381 11.6185 7.06509 12.3868 5.79146C13.0708 4.6192 14.5801 5.92995 13.9977 6.78563ZM17.8044 5.34879C17.2765 6.47401 14.9742 5.06933 15.7474 3.71411C16.5851 2.22036 18.3372 4.31013 17.8292 5.34879H17.8044ZM27.7843 35.3124C28.2403 36.7369 25.8809 36.5786 25.8115 35.812C25.7099 34.8252 27.4026 34.1278 27.7843 35.3124Z" fill="#FFB800"/>
                    </svg>
                </Link>
                <div className="flex justify-between">
                    <div className="flex flex-col items-start justify-center">
                        <Link href="/#features" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Features</Link>
                        <Link href="/#pricing" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Pricing</Link>
                        <Link href="/blog" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Blog</Link>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <Link href="/#get-started" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Get Started</Link>
                        <Link href="/terms-and-conditions" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="block text-xs py-2 text-white hover:text-pink transition duration-300">Privacy Policy</Link>
                    </div>
                </div>
                <h3 className="mt-10 uppercase tracking-wider text-xs font-semibold text-white text-opacity-40 flex gap-5 items-center justify-between">
                    Powered by
                    <Link href="https://www.contento.io">
                        <img className="w-[150px] pb-2 hover:opacity-60" src="/Contento-Logo.png"/>
                    </Link>
                </h3>
            </div>
        </footer>
    )
}