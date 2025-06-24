// ⚙️ backend/api/hederaTransfer.js

const express = require("express");
const { Client, AccountId, PrivateKey, TransferTransaction, Hbar } = require("@hashgraph/sdk");

const router = express.Router();

// ⚠️ Remplace par tes vraies infos
const operatorId = AccountId.fromString(process.env.HEDERA_ID);
const operatorKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

// POST /hedera/tx
router.post("/tx", async (req, res) => {
  const { recipient, amount } = req.body;

  try {
    const transferTx = await new TransferTransaction()
      .addHbarTransfer(operatorId, -amount)
      .addHbarTransfer(recipient, amount)
      .execute(client);

    const receipt = await transferTx.getReceipt(client);

    res.status(200).json({
      status: receipt.status.toString(),
      txId: transferTx.transactionId.toString(),
    });
  } catch (error) {
    console.error("❌ Erreur de transaction:", error);
    res.status(500).json({ error: "Erreur de transaction Hedera" });
  }
});

module.exports = router;
