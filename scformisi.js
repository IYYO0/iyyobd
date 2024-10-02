const confettiContainer = document.querySelector('.confetti');
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFC300', '#DAF7A6']; // Warna confetti

        for (let i = 0; i < 100; i++) { // Menghasilkan 100 confetti
            const confettiPiece = document.createElement('div');
            confettiPiece.style.left = Math.random() * 100 + '%'; // Posisi acak
            confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)]; // Warna acak
            confettiPiece.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Durasi acak antara 2s hingga 5s
            confettiPiece.style.animationDelay = Math.random() * 5 + 's'; // Delay acak
            confettiContainer.appendChild(confettiPiece);
        }

        function checkBirthday() {
            const input = document.getElementById('birthdate').value;
            const today = new Date();
            const birthDate = new Date(input);
        
            if (!input) {
                alert('Masukkan tanggal lahir terlebih dahulu.');
                return;
            }
        
            // Mengambil bulan dan hari untuk perbandingan
            const todayMonth = today.getMonth();
            const todayDate = today.getDate();
            const birthMonth = birthDate.getMonth();
            const birthDateOnly = birthDate.getDate();
        
            // Cek apakah hari ini adalah ulang tahunnya
            if (todayMonth === birthMonth && todayDate === birthDateOnly) {
                // Hitung umur
                const age = today.getFullYear() - birthDate.getFullYear();
                localStorage.setItem('age', age); // Simpan umur di localStorage
                window.location.href = 'congrats.html'; // Arahkan ke halaman congrats
            } else {
                // Hitung berapa hari lagi ulang tahunnya
                const nextBirthday = new Date(today.getFullYear(), birthMonth, birthDateOnly);
        
                if (nextBirthday < today) {
                    nextBirthday.setFullYear(today.getFullYear() + 1); // Jika sudah lewat, ulang tahun tahun depan
                }
        
                const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
                localStorage.setItem('daysUntilBirthday', daysUntilBirthday); // Simpan jumlah hari di localStorage
                window.location.href = 'wait.html'; // Arahkan ke halaman wait
            }
        }
        