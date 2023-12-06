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