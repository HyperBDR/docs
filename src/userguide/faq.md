# FAQ

[[toc]]

## How do I connect to SSH on Windows?

**Q: How do I connect to SSH on Windows?**

**A:** Please note that starting from Windows 10, Microsoft has integrated an OpenSSH client, allowing you to use the ssh command directly in the Command Prompt or PowerShell. Follow these steps:

1. **Open Command Prompt or PowerShell:**

   - Press `Win + X` and select "Windows PowerShell" or "Command Prompt."

2. **Run the SSH command:**

   - In the opened window, type the following command to connect to a remote server:

     ```bash
     ssh username@remote_host
     ```

     Replace `username` with your remote server username and `remote_host` with the server's address.

   - If your remote server uses a non-standard port (not the default 22), use the `-p` parameter to specify the port:

     ```bash
     ssh -p port_number username@remote_host
     ```

     Replace `port_number` with your server's port.

   - If you need to use a private key for authentication, use the `-i` parameter to specify the path to the private key:

     ```bash
     ssh -i path/to/private/key username@remote_host
     ```

**Examples:**
```bash
ssh john@example.com
ssh -p 2222 jane@192.168.1.100
ssh -i C:\path\to\private\key.pem user@remote-server
```

These commands will establish an SSH session, allowing you to execute commands or transfer files on the remote server.

**Note:** Ensure your network connection is stable, and the remote server allows SSH connections. If you encounter issues, check firewall settings, SSH server configuration, or network connectivity.

## Connecting to Linux with PuTTY on Windows

**Q: How can I use PuTTY to connect to a Linux server from Windows?**

**A:** PuTTY is a popular SSH client for Windows. Follow these steps to connect to a Linux server:

1. **Download and Install PuTTY:**
   - Download PuTTY from the official website: [PuTTY Download](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).
   - Install PuTTY by following the installation instructions.

2. **Open PuTTY:**
   - Launch PuTTY from the Start menu or desktop shortcut.

3. **Configure the Connection:**
   - In the PuTTY configuration window:
     - Enter the IP address or hostname of your Linux server in the "Host Name (or IP address)" field.
     - Ensure that the "Port" is set to 22 (the default for SSH).

4. **Choose Connection Type:**
   - On the left panel, navigate to "Connection" > "SSH."
   - Make sure "SSH" is selected.

5. **Optional: Save Session:**
   - To save your settings for future use, enter a name in the "Saved Sessions" field and click "Save."

6. **Initiate Connection:**
   - Click the "Open" button to start the connection.

7. **Enter Login Credentials:**
   - Once the terminal window opens, you will be prompted to enter your Linux username and password.

8. **Success:**
   - If the credentials are correct, you will be connected to your Linux server via SSH.

**Note:** Ensure that SSH is enabled on your Linux server and that you have the correct login credentials.

**Troubleshooting:**
- If you encounter issues, double-check your server's IP address, ensure SSH is running, and confirm your login details.

## FAQ: Ensuring Windows Data Integrity with HyperBDR

**Q1: How does HyperBDR ensure the integrity of Windows data?**

A1: HyperBDR primarily utilizes Windows VSS (Volume Shadow Copy Service) technology to ensure data integrity. In VMware without an agent, it achieves this by invoking VSS through VMware Tools. In Windows Agent mode, it directly calls the VSS interface.

**Q2: What is Windows VSS technology?**

A2: VSS, or Volume Shadow Copy Service, is a Windows service that enables the creation of point-in-time snapshots of volumes, including those containing databases. These snapshots, or shadow copies, provide a consistent view of the data, even if changes are being made to the database during the snapshot creation process.

VSS ensures database integrity through a process known as "shadow copy creation." When a VSS snapshot is triggered, the service coordinates with various components, including VSS writers associated with applications such as databases. These writers temporarily freeze write I/O operations to ensure that the data on the disk is in a consistent state at the time of the snapshot.

VSS is compatible with various Database Management Systems (DBMS), including SQL Server. Most major DBMS vendors provide VSS writers that integrate with the VSS framework, allowing for the creation of consistent and reliable database snapshots.

**Q3: In VMware without an agent, how does HyperBDR call VSS?**

A3: In VMware without an agent, HyperBDR collaborates with VMware Tools to invoke VSS, freezing the file system and application states to ensure data consistency during snapshot creation.

**Q4: In Windows Agent mode, how does HyperBDR directly call the VSS interface?**

A4: In Windows Agent mode, HyperBDR directly calls the VSS interface provided by the Windows operating system to freeze data and create snapshots, ensuring the backup data is in a transactionally consistent state.

**Q5: Does HyperBDR's data integrity assurance apply to specific applications like databases?**

A5: Yes, HyperBDR's VSS integration is application-aware and applicable to specific applications, including databases. VSS ensures that application data is in a consistent state during snapshot creation.
