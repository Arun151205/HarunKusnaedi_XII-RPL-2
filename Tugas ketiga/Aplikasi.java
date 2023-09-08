import java.util.ArrayList;
import java.util.Scanner;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Aplikasi {
    public static void main(String[] args) {
        BukuTelepon bukuTelepon = new BukuTelepon();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Menu:");
            System.out.println("1. Tambah Kontak");
            System.out.println("2. Hapus Kontak (berdasarkan nama)");
            System.out.println("3. Hapus Kontak (berdasarkan nomor telepon)");
            System.out.println("4. Tampilkan Daftar Kontak");
            System.out.println("5. Keluar");
            System.out.print("Pilih operasi (1/2/3/4/5): ");
            int pilihan = scanner.nextInt();
            scanner.nextLine(); // Membuang karakter newline dari input sebelumnya

            switch (pilihan) {
                case 1:
                    System.out.print("Nama: ");
                    String nama = scanner.nextLine();
                    System.out.print("Nomor Telepon: ");
                    String nomorTelepon = scanner.nextLine();
                    System.out.print("Email: ");
                    String email = scanner.nextLine();
                    Kontak kontak = new Kontak(nama, nomorTelepon, email);
                    bukuTelepon.tambahkanKontak(kontak);
                    System.out.println("Kontak berhasil ditambahkan.");
                    bukuTelepon.simpanDataKontak("Kontak.txt");
                    break;
                case 2:
                    System.out.print("Nama kontak yang akan dihapus: ");
                    String namaHapus = scanner.nextLine();
                    bukuTelepon.hapusKontak(namaHapus);
                    break;
                case 3:
                    System.out.print("Nomor telepon kontak yang akan dihapus: ");
                    String nomorTeleponHapus = scanner.nextLine();
                    bukuTelepon.hapusKontakByNomor(nomorTeleponHapus);
                    break;
                case 4:
                    bukuTelepon.tampilkanDaftarKontak();
                    break;
                case 5:
                    System.out.println("Keluar dari aplikasi.");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Pilihan tidak valid. Silakan pilih lagi.");
            }
        }
    }
}

class Kontak {
    private String nama;
    private String nomorTelepon;
    private String email;

    public Kontak(String nama, String nomorTelepon, String email) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.email = email;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getNomorTelepon() {
        return nomorTelepon;
    }

    public void setNomorTelepon(String nomorTelepon) {
        this.nomorTelepon = nomorTelepon;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Nama: " + nama + "\nNomor Telepon: " + nomorTelepon + "\nEmail: " + email + "\n";
    }
}

class BukuTelepon {
    private ArrayList<Kontak> daftarKontak = new ArrayList<>();

    public void tambahkanKontak(Kontak kontak) {
        daftarKontak.add(kontak);
    }

    public void hapusKontak(String nama) {
        for (int i = 0; i < daftarKontak.size(); i++) {
            if (daftarKontak.get(i).getNama().equalsIgnoreCase(nama)) {
                daftarKontak.remove(i);
                System.out.println("Kontak dengan nama " + nama + " berhasil dihapus.");
                return;
            }
        }
        System.out.println("Kontak dengan nama " + nama + " tidak ditemukan.");
    }

    public void hapusKontakByNomor(String nomorTelepon) {
        for (int i = 0; i < daftarKontak.size(); i++) {
            if (daftarKontak.get(i).getNomorTelepon().equals(nomorTelepon)) {
                daftarKontak.remove(i);
                System.out.println("Kontak dengan nomor telepon " + nomorTelepon + " berhasil dihapus.");
                return;
            }
        }
        System.out.println("Kontak dengan nomor telepon " + nomorTelepon + " tidak ditemukan.");
    }

    public void tampilkanDaftarKontak() {
        if (daftarKontak.isEmpty()) {
            System.out.println("Daftar kontak kosong.");
        } else {
            System.out.println("Daftar Kontak:");
            for (Kontak kontak : daftarKontak) {
                System.out.println(kontak);
            }
        }
    }

    public void simpanDataKontak(String namaFile) {
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(namaFile))) {
            for (Kontak kontak : daftarKontak) {
                writer.write("Nama: " + kontak.getNama() + "\n");
                writer.write("Nomor Telepon: " + kontak.getNomorTelepon() + "\n");
                writer.write("Email: " + kontak.getEmail() + "\n\n");
            }
            System.out.println("Data kontak berhasil disimpan ke " + namaFile);
        } catch (IOException e) {
            System.err.println("Gagal menyimpan data kontak ke " + namaFile);
            e.printStackTrace();
        }
    }
    
}