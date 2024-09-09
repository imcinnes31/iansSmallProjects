const skillsDictionary =
{
    "Job Skills": {
        "name": "Experience",
        "skills": {
            "Software Development": {
                "desc": "Creating web applications to help with various tasks to easily display data and save time in activities", 
                "jobs":
                {
                    "Canex": [
                        "Used Visual Studio Code to create web applications:",
                        "Created 'Sign Wizard', a web application to help change the message on outdoor advertising board by listing letters to pull off and letters to bring out",
                        "Created 'Canex Warranty', a web application to display prices of big ticket service protection plans based on length, price of item, and number of items bought",
                        "Created 'Applecare Form', a web application to automatically fill out the form for Applecare on Apple items, based on item bought and Applecare code, without having to fill it out by hand",
                    ],
                    "Phare Counseling": [
                        "Helped create 'Find A Counselor', a web application to help clients find a mental health counselor, using Visual Studio Code",
                        "Added filters to the program to narrow client's search based, price range, specializations, or (if in-person counseling needed) by location",
                        "Reformatted the entire application for use on mobile devices",
                    ],
                },
            },
            "Data Management": {
                "desc": "Entering, filtering, sorting, and confirming data for people, places, and things", 
                "jobs":
                {
                    "Canex": [
                        "Searched customers by name or phone number to find account for credit plans or special orders",
                        "Used filters and sorting to find specific requested products for customers, and order them if needed from main warehouse or other stores",
                        "Created JavaScript dictionary of extended warranty data, including product code, barcode number, and price, categorizing them into product types and warranty lengths",
                        "Created MySQL database of letters for outside sign, including number in inventory and width of letters, using MySQL Workbench",
                    ],
                    "Phare Counseling": [
                        "Entered information about counselors into application database, such as name, specializations, approaches, location, prices, using MongoDB Compass",
                        "Updated counselor information in database when necessary (price increase, etc.)",
                        "Created MongoDB queries to filter counselor search, for use in back end development",
                    ],
                    "Video Cellar": [
                        "Created new rental accounts for customers, took credit information, assigned rental card numbers",
                        "Entered information for new rental movies, assigned barcodes, rental item number, and categories",
                    ],
                    "Rogers Plus": [
                        "Created new rental accounts for customers, took credit information, assigned rental cards",
                    ],
                },
            },
            "Back End Development": {
                "desc": "Creating code to handle inner workings of web applications, to handle data management or calculations", 
                "jobs":
                {
                    "Canex": [
                        "Used Python with Flask framework for 'Sign Wizard' application to calculate number of letters needed to bring out or pull off, while determining if there were enough letters for the new message and if it would fit on the sign",
                    ],
                    "Phare Counseling": [
                        "Used Node with Express to create APIs, as well as perform database queries to search for, update, and create counselor data",
                    ],
                },
            },
            "Front End Development": {
                "desc": "Creating client-end user interfaces for interacting with web applications",
                "jobs":
                {                    
                    "Canex": [
                        "Used HTML, CSS, and JavaScript for various purposes:",
                        "To make 'Sign Wizard' interface to enter in new message for outside sign, or update current letter inventory",
                        "To make 'Canex Warranty' interface to enter in price of product to determine price of warranty, and retrieve warranty barcode",
                        "To replicate form for Applecare extended warranty, using text inputs and dropdown menus to easily search for products and retrieve warranty information, or to alert user if they forgot to fill a field",
                    ],
                    "Phare Counseling": [
                        "Used HTML, CSS, JavaScript, and React components to create client-end webpage for users to find counselors, including checkboxes, radio buttons, and drop down menus to allow the user to narrow their search",
                    ],
                },
            },
            "Application Deployment": {
                "desc": "Transferring code to online deployment to make applications available to external users", 
                "jobs":
                {
                    "Canex": [
                        "Uploaded all web applications to GitHub, while updating them using Github site or Visual Studio",
                        "Deployed 'Sign Wizard' application on Heroku, reuploading when updates made",
                    ],
                    "Phare Counseling": [
                        "Stored code using GitHub, checked for any merge conflicts using GitHub Desktop",
                        "Deployed front-end code using Firebase CLI",
                        "Deployed back-end code using Heroku",
                    ],
                },
            },
            "Inventory Control": {
                "desc": "Counting, categorizing, and confirming amounts and prices of various products in inventory", 
                "jobs":
                {
                    "Canex": [
                        "Counted big ticket items, such as laptops, TVs, video game systems, when stocktaking days were occuring",
                        "Checked prices of items, confirmed if they were correct, or currently on sale",
                        "Placed new products out in appropriate locations once received, printed price labels when needed"
                    ],
                    "Video Cellar": [
                        "Went over lists of customers with late movie returns, confirmed over phone when they would be returned",
                        "Transferred rental movies over to 'previously viewed' status and priced them when they were ready to be sold instead of rented",
                    ],
                    "Rogers Plus": [
                        "Placed returned movies back into inventory, ready to be rented again",
                        "Counted big ticket items, big box DVD sets, video games, and mobile phones to prevent shortages",
                        "Transferred rental movies over to 'previously viewed' status and priced them",
                    ],
                    "Seven-Eleven": [
                        "Was placed in charge of ordering beverage products",
                        "Ordered products based on expected sales, minimum inventory needed, and current inventory on hand",
                    ],
                },
            },
            "Shipping and Receiving": {
                "desc": "Receiving products sent from various locations, and arranging sending out of products to various locations", 
                "jobs":
                {
                    "Canex": [
                        "Called up requests for special orders from people and other stores",
                        "Confirmed inventory of wanted items, packaged them appropriately with packing lists",
                        "Arranged shipping with couriers, printed shipping labels",
                    ],
                    "Video Cellar": [
                        "Printed up letters to customers regarding long overdue rentals, as well as packaged, addressed, and posted them",
                    ],
                    "Rogers Plus": [
                        "Used main computer terminal to recieve new movies, games, electronics and mobile phones once number received was confirmed",
                    ],
                },
            },
            "Computer Skills": {
                "desc": "Using various software to filter, print, or advertise information", 
                "jobs":
                {
                    "Canex": [
                        "Created spreadsheets to list technical specifications of electronics to help customers make a better decision about which ones to buy"
                    ],
                    "Phare Counseling": [
                        "Learned various programming languages (Node, React, MongoDB, Express, JavaScript, HTML, CSS) and software (MongoDB Compass, Visual Studio Code) for use in creating the 'Find A Counselor' web application"
                    ],
                    "Rogers Plus": [
                        "Used store software for inventory, processing rental and sales transactions, or mobile phone plans"
                    ],
                },
            },
            "Financial Planning": {
                "desc": "Processing, printing, and confirming credit plan transactions on big ticket items", 
                "jobs":
                {
                    "Canex": [
                        "Arranged credit plans for customers on electronics, appliances, outside vendors, etc. based on length of plan wanted",
                        "Performed credit checks on customers to confirm eligibility for credit plans",
                        "Encouraged the buying of optional service protection plans on certain items, based on price, length of plan, and number of items",
                        "Confirmed needed payments per month, completed necessary paperwork with customers",
                    ],
                    "Rogers Plus": [
                        "Arranged credit plans for customers on mobile phones and accompanying cellular plans",
                        "Performed credit checks on customers to confirm eligibility for credit plans",
                        "Assigned phone number and SIM Card to cellular plans",
                        "Encouraged the addition of optional features such as texing plans, mobile internet, and long distance / roaming plans",
                        "Went over paperwork with customers before completing transaction, citing important contract points",
                        "Took payments from customers toward their mobile phone bills"
                    ],
                },
            },
            "Cash Management": {
                "desc": "Performing cash / debit / credit transactions, ensuring cash was balanced and transactions were performed correctly", 
                "jobs":
                {
                    "Canex": [
                        "Balanced tills at beginning or end of work day, counted store cash float, placed cash in, or removed from, store safe",
                        "Kept debit / credit transaction receipts in appropriate piles, packaged receipts at end of work day",
                    ],
                    "Video Cellar": [
                        "Balanced till at beginning or end of work day, counted store cash float",
                    ],
                    "Rogers Plus": [
                        "Balanced tills at beginning or end of work day, counted safe deposits, prepared bank deposit for security courier",                "Kept debit / credit transaction receipts in appropriate piles, packaged receipts at end of work day",
                        "Kept debit / credit transaction receipts in appropriate piles, packaged receipts at end of work day",
                    ],
                    "Seven-Eleven": [
                        "Balanced tills at beginning and end of shift, made safe deposits when needed",
                    ],
                },
            },
            "Leadership": {
                "desc": "Coaching staff to get set up with the work environment, delegate them to various workload items, and help them to perform difficult tasks or previously unknown ones", 
                "jobs":
                {
                    "Canex": [
                        "Helped new staff to conduct credit plan transactions, customer special orders, printing price labels and sale signs, and opening / closing procedures",
                    ],
                    "Phare Counseling": [
                        "Helped new developers to get set up with the programming software needed to make the application, and do small programming tasks",
                        "Became Team Leader, chaired weekly meetings, provided feedback on progress",
                        "Delegated tasks to developers, made sure application was completed on time",
                    ],
                    "Rogers Plus": [
                        "Became Shift Leader, helped new staff to sign up mobile phone plans, perform customer special orders, and sell special items on sale",
                    ],
                },
            },
            "Logistics and Analytics": {
                "desc": "Using mathematical skills to find the best solution to problems", 
                "jobs":
                {
                    "Canex": [
                        "Helped customers decide whether to buy service protection plans by calculating bi-monthly cost with or without the protection",
                        "Worked out odds of winning various lottery games sold in the store",
                    ],
                    "Rogers Plus": [
                        "Created charts to help customers decide the correct long distance / roaming plan to buy, based on planned usage and whether the overage fees would amount to making the next plan up worth it",
                    ],
                    "Seven-Eleven": [
                        "Helped customers buy the best long distance phone cards, based on expected length of call and destination",
                    ],
                },
            },
            "Product Knowledge": {
                "desc": "Receiving products sent from various locations, and arranging sending out of products to various locations", 
                "jobs":
                {
                    "Canex": [
                        "Built technical knowledge of desktop / laptop computers, TVs, Appliances to recommend the best one based on the customer's needs",
                        "Learned about various units of the military's needs in order to recommend clothing, military memorabilia, etc.",
                    ],
                    "Video Cellar": [
                        "Watched new release movies in advance in order to convey to customers my opinion of them",
                    ],
                    "Rogers Plus": [
                        "Watched new release movies in advance in order to give customers recommendations",
                        "Watched movies in various categories to build knowledge of actors, genres, Academy Award Winners",
                        "Built knowledge of cell phone types, mobile phone plans, and additional features",
                    ],
                },
            },
            "Retail Sales": {
                "desc": "Selling items in a retail environment to customers with various kinds of transactions", 
                "jobs":
                {
                    "Canex": [
                        "Sold electronics, household needs, sundry items, clothing, and food items to military members and civilians",
                    ],
                    "Video Cellar": [
                        "Rented out movies to customers, sold used 'previously viewed' movies",
                    ],
                    "Rogers Plus": [
                        "Rented out movies to customers, sold used 'previously viewed' movies or brand new ones",
                        "Rented out and sold video games and video game systems",
                        "Sold 'Pay As You Go' cell phones, or monthly cell phone plans",
                    ],
                    "Seven-Eleven": [
                        "Sold various items, including food, tobacco, lottery, phone cards, etc.",
                    ],
                },
            },  
            "Teamwork": {
                "desc": "Collaborating with team members to maintain the workplace and reach goals", 
                "jobs":
                {
                    "Canex": [
                        "Completed daily store maintenance checklists by splitting tasks among each other",
                        "Encouraged other members of team to reach sales goals or gave help with difficult tasks",
                        "Gave or received feedback on sales transactions or credit plans",
                    ],
                    "Phare Counseling": [
                        "Gave and/or received constructive feedback on software progress, offered ideas for improvement",
                        "Offered coding advice on software features that needed to be fixed",
                    ],
                    "Video Cellar": [
                        "Demonstrated floor service techniques to staff",
                        "Assisted staff to increase sales of special items",
                    ],
                    "Rogers Plus": [
                        "Helped other staff with cell phone plans and cash handling duties",
                        "Encouraged other team members to push sales of add-ons and special memberships",
                    ],
                },
            } 
        }
   },
    "Red River College": {
        "name": "RRCC",
        "skills": {
            "Software Development Certification":[
                "Completed Software Development Certification at Red River Community College, with a 4.5 GPA",
                "Took Java Programming 1-4, SQL Programming, and Business Analysis",
                "Obtained Oracle OCA Certification in Java Programming",
            ],
            "Java Programming":[
                "Used Eclipse to create various Java Programs",
                "Created 'Olympus', a Swing GUI application to edit level maps for classic Macintosh RPG game 'The Odyssey'",
                "Did exercises in Class Design, Error Handling, Collections, File I/O, Functions, Streams, and Database Queries",
                "Created APIs using Spring Boot framework",
            ],
            "Business Analysis":[
                "Created diagrams to determine potential problems and solutions for businesses",
                "Made flowcharts to clearly display the process of a business, from customer request to customer delivery",
                "Wrote up final report on recommendations to an imaginary failing business as to how to drop unncessary practices and increase productivity",
            ],
            "SQL Programming":[
                "Created tables and entered and updated data using Microsoft SQL Server", 
                "Made queries to display, sort, and filter data",
                "Programmed views, stored procedures, and indexes to create read, update, and delete data in SQL databases", 
            ],
        }
    },
    "Other Skills": {
        "name": "Other",
        "skills": {
            "Driver's License": "Class 5F Driver's License", 
            "Microsoft Office": "Proficient in Microsoft Word / Excel / Outlook", 
            "Google Docs Editors": "Proficient with Google Docs / Google Spreadsheets",
        },
    }
}

const jobNames = {
    "Canex": {"name":"CANEX, 17 Wing Air Force Base","location":"Winnipeg, MB","date":"Jun 2017 - Present","title":"Sales Associate"},
    "Phare Counseling" : {"name":"Phare Counseling","location":"(Remote)","date":"Aug 2021 - Feb 2022","title":"Full Stack Developer, Database Administrator, Team Leader"},
    "Video Cellar" : {"name":"Video Cellar","location":"Winnipeg, MB","date":"Oct 2013 - Feb 2016","title":"Video Rental Clerk"},
    "Rogers Plus" : {"name":"Rogers Plus (formerly Rogers Video)","location":"Winnipeg, MB","date":"Dec 2006 - Aug 2012","title":"Shift Leader"},
    "Seven-Eleven" : {"name":"Seven-Eleven Food Stores","location":"Winnipeg, MB","date":"Aug 2003 - Nov 2006","title":"Sales Associate"},
}

const iansInfo = {
    "name": "Ian McInnes",
    "phone": "(204) 293-1517",
    "email": "imcinnes31@gmail.com",
    "address": "606 - 340 Princess Street, Winnipeg, MB, R3B 3L2",
}